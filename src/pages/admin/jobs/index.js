import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Switch,
  Popover,
  PageHeader,
  Descriptions,
  Popconfirm,
  message,
} from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import strings from "res/strings";
import { deleteJob, getListJob } from "network/apis/jobs/JobApi";

function AdminTable({ history }) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      let res = await getListJob({
        page: pagination.current - 1,
        size: pagination.pageSize,
      });
      setIsLoading(false);
      setData(res.data.data);
      setTotal(res.data.total);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [pagination]);

  const columns = [
    {
      title: "STT",
      key: "ordNum",
      render: (record, self, index) => index + 1,
    },
    {
      title: "Tên công ty",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vị trí",
      dataIndex: "address",
      key: "address",
      width: "20%",
    },
    {
      title: "Lương",
      dataIndex: "salary",
      key: "salary",
      render: (record, self, index) => {
        return (
          self?.fromPrice?.formatPrice() + " - " + self?.toPrice?.formatPrice()
        );
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "create_at",
      key: "create_at",
      render: (record, self, index) => {
        return moment(self?.create_at).format("DD/MM/YYYY");
      },
    },
    {
      title: "Hạn nộp CV",
      dataIndex: "deadline",
      key: "deadline",
      render: (record, self, index) => {
        return moment(self?.deadline, "DD-MM-YYYY").format("DD/MM/YYYY");
      },
    },
    {
      title: "Số CV đã nhận",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Trình độ",
      dataIndex: "level",
      key: "level",
      render: (record, self, index) => {
        return strings.level[self?.level];
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (record, self, index) => {
        return <Switch checked={self.status} />;
      },
    },
    {
      title: "Lĩnh vực",
      dataIndex: "major",
      key: "major",
      render: (record, self, index) => {
        return (
          <Popover
            content={content(self?.fields)}
            title="Lĩnh vực"
            trigger="hover"
          >
            <EyeOutlined />
          </Popover>
        );
      },
    },
    {
      title: "Tuỳ chọn",
      key: "option",
      render: (record, self, index) => {
        return (
          <span>
            <Button type="text">
              <EditOutlined />
            </Button>
            <Button type="text">
              <Popconfirm
                title="Bạn có muốn xoá công việc này không?"
                onConfirm={confirm.bind(this, self)}
                onCancel={cancel}
                okText="Có"
                cancelText="Không"
              >
                <DeleteOutlined />
              </Popconfirm>
            </Button>
          </span>
        );
      },
    },
  ];
  async function confirm(e) {
    try {
      let res = await deleteJob(e._id);
      message.success("Xoá thành công");
      let arr = data.filter((item) => item._id != e._id);
      setData(arr);
      getData();
    } catch (error) {
      message.error("Xoá thất bại");
    }
  }

  function cancel(e) {}
  const onDelete = (record) => {};
  const content = (record) => {
    return (
      <div>
        {record?.map((item, index) => (
          <p>{item?.name}</p>
        ))}
      </div>
    );
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onDeleteAll = (record) => {};
  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };
  const onImport = () => history.push("/partner/work/import-job");
  return (
    <>
      <PageHeader
        ghost={false}
        // onBack={() => window.history.back()}
        title="Danh sách công việc"
        extra={[
          <Button onClick={onDeleteAll} key="3">
            Xoá công việc
          </Button>,
          <Button key="1" onClick={onImport} type="primary">
            Import Công việc
          </Button>,
        ]}
      ></PageHeader>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        headerTitle="Danh sách công việc"
        rowKey="key"
        search={false}
        // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ ...pagination, total }}
        onChange={handleTableChange}
      />
    </>
  );
}
export default AdminTable;
