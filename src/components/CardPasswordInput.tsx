import React, { useCallback, useContext, useState } from "react";
import CardInfoContext from "context/CardInfoContext";

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "utils/constants";

import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";

export default function CardPasswordInput() {
  const [isInvalid, setInvalid] = useState(false);

  const { state, setState } = useContext(CardInfoContext);

  const { passwordLength } = state;

  const handleInputChange = (e, order) => {
    setInvalid(false);

    const newPasswordLength = [...passwordLength];
    newPasswordLength[order] = e.target.value.length;
    setState({ ...state, passwordLength: newPasswordLength });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return (
    <InputField
      labelText={"카드 비밀번호 앞 두 자리"}
      wrapperWidth={"xs"}
      isInvalid={isInvalid}
      isComplete={
        passwordLength[0] + passwordLength[1] ===
        CARD_INFO_RULES.PASSWORD_LENGTH
      }
      isSplit={true}
    >
      {Array.from({ length: CARD_INFO_RULES.PASSWORD_LENGTH }).map(
        (_, index) => (
          <Input
            key={index}
            type={"password"}
            placeholder={CREATE_MASKED_CHARACTERS(1)}
            name={`password${index + 1}`}
            maxLength={1}
            required
            width={"full"}
            isComplete={passwordLength[index] === 1}
            onChange={(e) => handleInputChange(e, index)}
            onInvalid={triggerInvalid}
            pattern={"^[0-9]+$"}
            data-testid={"password"}
          />
        )
      )}
    </InputField>
  );
}