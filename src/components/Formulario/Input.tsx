import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import {
  ForwardRefRenderFunction,
  useState,
  forwardRef,
  useEffect,
  useCallback,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface EntradaProps extends InputProps {
  name: string;
  register: any;
  label?: string;
  error?: FieldError | null;
  iconLeft?: IconType;
  iconRight?: IconType;
}

type statusOptions = {
  [key: string]: string;
};

const statusColor: statusOptions = {
  default: "cinza.100",
  error: "status.negative",
  focus: "cinza.600",
  filled: "status.success",
};

const Entrada: ForwardRefRenderFunction<HTMLInputElement, EntradaProps> = (
  {
    name,
    register,
    label,
    error = null,
    iconLeft: Licon,
    iconRight: Ricon,
    ...rest
  },
  ref
) => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("default");

  useEffect(() => {
    if (error) {
      return setStatus("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setStatus("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setStatus("filled");
    }
  }, [error, value]);

  return (
    <>
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel>{label}</FormLabel>}
        <InputGroup>
          {Licon && (
            <InputLeftElement color={statusColor[status]}>
              <Licon />
            </InputLeftElement>
          )}
          <ChakraInput
            name={name}
            onChangeCapture={(event) => setValue(event.currentTarget.value)}
            onFocus={handleInputFocus}
            onBlurCapture={handleInputBlur}
            borderColor={statusColor[status]}
            color={statusColor[status]}
            bg="cinza.0"
            variant="outline"
            size="lg"
            h="60px"
            _hover={{ bgColor: "cinza.100" }}
            _placeholder={{ color: "cinza.300" }}
            _focus={{ bg: "cinza.100" }}
            ref={ref}
            {...register(name)}
            {...rest}
          />
          {Ricon && (
            <InputRightElement>
              <Ricon />
            </InputRightElement>
          )}
          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </InputGroup>
      </FormControl>
    </>
  );
};

export const Input = forwardRef(Entrada);
