import React from "react";
import Input from "./UIComponents/Input/Input.jsx";
import styled from "styled-components";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants.js";
import useInputFocus from "../useInputFocus.jsx";

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  position: relative;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => (props.isComplete ? "#04c09e" : "#525252")};
  letter-spacing: -0.085em;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #ecebf1;
  border-radius: 7px;
  width: ${(props) => props.width};
  padding: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #04c09e;
`;

export default function CardPasswordInput({ password, onChange }) {
  const [inputRef, setFocusInputIndex] = useInputFocus(password, 1);

  return (
    <StyledInputField>
      <StyledLabel
        isComplete={
          password.join("").length === CARD_INFO_RULES.PASSWORD_LENGTH
        }
      >
        카드 비밀번호 앞 두 자리
      </StyledLabel>
      <StyledInputContainer>
        {Array.from({ length: CARD_INFO_RULES.PASSWORD_LENGTH }).map(
          (_, index) => (
            <StyledInputWrapper width="45px" key={index}>
              <Input
                type="password"
                value={password[index]}
                onChange={(e) => onChange(e, index)}
                width="100%"
                placeholder={CREATE_MASKED_CHARACTERS(1)}
                onFocus={() => setFocusInputIndex(index)}
                isComplete={password[0].length === 1}
                ref={(element) => (inputRef.current[index] = element)}
              />
            </StyledInputWrapper>
          )
        )}
      </StyledInputContainer>
    </StyledInputField>
  );
}