import {
  FormControl,
  // FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, useState, forwardRef } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  register: any;
  error?: string;
}

const Entrada: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, register, error, ...rest },
  ref
) => {
  const [value, setValue] = useState("");

  return (
    <>
      <FormControl>
        <ChakraInput
          value={value}
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          error={error}
          {...register(name)}
          ref={ref}
          {...rest}
        />
      </FormControl>
    </>
  );
};

export const Input = forwardRef(Entrada);
