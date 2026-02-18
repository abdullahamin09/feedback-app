import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';

const { TextArea } = Input;

const FeedbackModal = ({ isVisible, onCancel, onSubmit }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Modal
            title={<h2 className="text-[#3A4374] font-bold text-2xl px-2 pt-4">Create New Feedback</h2>}
            open={isVisible}
            onCancel={onCancel}
            footer={null} // We'll use our custom buttons in the form
            centered
            width={540}
            className="feedback-modal"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className="px-2 pb-4"
                initialValues={{ category: 'Feature', status: 'Planned' }}
            >
                {/* Feedback Title */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Feedback Title</span>}
                    name="title"
                    rules={[{ required: true, message: 'Please add a title' }]}
                >
                    <Input
                        placeholder="Add a short, descriptive headline"
                        className="bg-[#F7F8FD] border-none p-3 rounded-lg"
                    />
                </Form.Item>

                {/* Category */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Category</span>}
                    name="category"
                >
                    <Select className="h-12 border-none rounded-lg bg-[#F7F8FD]">
                        <Select.Option value="Feature">Feature</Select.Option>
                        <Select.Option value="UI">UI</Select.Option>
                        <Select.Option value="UX">UX</Select.Option>
                        <Select.Option value="Enhancement">Enhancement</Select.Option>
                        <Select.Option value="Bug">Bug</Select.Option>
                    </Select>
                </Form.Item>

                {/* Status */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Status</span>}
                    name="status"
                >
                    <Select className="h-12 border-none rounded-lg bg-[#F7F8FD]">
                        <Select.Option value="Planned">Planned</Select.Option>
                        <Select.Option value="In-Progress">In-Progress</Select.Option>
                        <Select.Option value="Live">Live</Select.Option>
                    </Select>
                </Form.Item>

                {/* Feedback Details */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Feedback Details</span>}
                    name="desc"
                    rules={[{ required: true, message: 'Please add details' }]}
                >
                    <TextArea
                        rows={4}
                        className="bg-[#F7F8FD] border-none p-3 rounded-lg"
                    />
                </Form.Item>

                {/* Custom Buttons Footer */}
                <div className="flex justify-between items-center mt-10">
                    <Button
                        danger
                        type="primary"
                        className="bg-[#D73737] hover:bg-[#E95757] h-12 px-8 font-bold rounded-xl border-none"
                    >
                        Delete
                    </Button>

                    <div className="flex gap-4">
                        <Button
                            onClick={onCancel}
                            className="bg-[#373F68] hover:bg-[#656EA3] text-white h-12 px-8 font-bold rounded-xl border-none"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#AD1FEA] hover:bg-[#C75AF6] h-12 px-8 font-bold rounded-xl border-none"
                        >
                            Add Feedback
                        </Button>
                    </div>
                </div>
            </Form>
        </Modal>
    );
};

export default FeedbackModal;