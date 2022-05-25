import React from "react";
import Button from "./Button";

export default {
  title: "UI Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "sample",
};