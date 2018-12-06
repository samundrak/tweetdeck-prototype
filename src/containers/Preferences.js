import React from 'react';
import { connect } from 'react-redux';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
class Preferences extends React.Component {
  render() {
    const { preferences } = this.props;
    return (
      <Form>
        <FormItem {...formItemLayout} label="Tweets">
          <Input type="number" defaultValue={preferences.tweetsPerColumn} />
        </FormItem>
        <FormItem {...formItemLayout} label="E-mail">
          <Input />
        </FormItem>
      </Form>
    );
  }
}
const mapStateToProps = (state) => ({
  preferences: state.app.preferences,
});
export default connect(mapStateToProps)(Preferences);
