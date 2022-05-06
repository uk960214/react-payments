import React from "react";
import CardPreview from "./CardPreview";

export default {
  title: "UI Components/CardPreview",
  component: CardPreview,
};

const Template = (args) => <CardPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardInfo: {
    cardNumber: ["1234", "5678", "9012", "3456"],
    holderName: "카드 소유자 이름",
    expireDate: ["01", "25"],
  },
};
