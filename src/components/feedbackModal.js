import React from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';

const { TextArea } = Input;

const FeedbackModal = ({ isVisible, onCancel, onSubmit, editingFeedback, onDelete }) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
        if (editingFeedback) {
            form.setFieldsValue(editingFeedback);
        } else {
            form.resetFields();
        }
    }, [editingFeedback, form]);

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    const handleDelete = () => {
        if (!editingFeedback) return;

        Modal.confirm({
            title: 'Are you sure you want to delete this feedback?',
            okText: 'Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                if (onDelete) onDelete(editingFeedback.id);
                console.log('Deleted feedback with ID:', editingFeedback.id);
                form.resetFields();
                message.success('Feedback deleted');
                if (onCancel) onCancel();
            }
        });
    };

    return (
        <Modal
            title={<h2 className="text-[#3A4374] font-bold text-2xl px-2 pt-4">{editingFeedback ? 'Edit Feedback' : 'Create New Feedback'}</h2>}
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
                initialValues={{ category: 'feature', status: 'planned' }}
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
                        value={form.getFieldValue('title')}
                        onChange={(e) => form.setFieldsValue({ title: e.target.value })}
                    />
                </Form.Item>

                {/* Category */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Category</span>}
                    name="category"
                >
                    <Select className="h-12 border-none rounded-lg bg-[#F7F8FD]"

                        value={form.getFieldValue('category')}
                        onChange={(e) => form.setFieldsValue({ category: e })}
                    >
                        <Select.Option value="feature">Feature</Select.Option>
                        <Select.Option value="ui">UI</Select.Option>
                        <Select.Option value="ux">UX</Select.Option>
                        <Select.Option value="enhancement">Enhancement</Select.Option>
                        <Select.Option value="bug">Bug</Select.Option>
                    </Select>
                </Form.Item>

                {/* Status */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Status</span>}
                    name="status"
                >
                    <Select className="h-12 border-none rounded-lg bg-[#F7F8FD]"
                        value={form.getFieldValue('status')}
                        onChange={(e) => form.setFieldsValue({ status: e })}
                    >
                        <Select.Option value="planned">Planned</Select.Option>
                        <Select.Option value="in-progress">In-Progress</Select.Option>
                        <Select.Option value="live">Live</Select.Option>
                    </Select>
                </Form.Item>

                {/* Feedback Details */}
                <Form.Item
                    label={<span className="font-bold text-[#3A4374]">Feedback Details</span>}
                    name="description"
                    rules={[{ required: true, message: 'Please add details' }]}
                >
                    <TextArea
                        rows={4}
                        className="bg-[#F7F8FD] border-none p-3 rounded-lg"
                        value={form.getFieldValue('description')}
                        onChange={(e) => form.setFieldsValue({ description: e.target.value })}
                    />
                </Form.Item>

                {/* Custom Buttons Footer */}
                <div className="flex justify-between items-center mt-10">
                    {editingFeedback && (
                        <Button
                            danger
                            type="primary"
                            onClick={handleDelete}
                            className="bg-[#D73737] hover:bg-[#E95757] h-12 px-8 font-bold rounded-xl border-none"
                        >
                            Delete
                        </Button>
                    )}

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
                            {editingFeedback ? 'Edit Feedback' : 'Add Feedback'}
                        </Button>
                    </div>
                </div>
            </Form>
        </Modal>
    );
};

export default FeedbackModal;