import { FormEvent } from "react";

export interface SearchProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
