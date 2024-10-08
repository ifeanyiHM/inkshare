import { Dispatch, SetStateAction } from "react";

export interface LinkContextProps {
  Logout: () => void;
  addForm: number[];
  handleAddForm: () => void;
  isFormClicked: boolean;
  handleSubmitForm: (event: React.FormEvent) => void;
  handleRemoveForm: (index: number) => void;
  openDropdownIndex: number | null;
  setOpenDropdownIndex: (index: number | null) => void;
  selectedItems: number[];
  handleSelectItem: (formIndex: number, itemIndex: number) => void;
  inputValues: string[];
  inputError: boolean;
  handleInputChange: (formIndex: number, value: string) => void;
  submittedData: dropDownListProps[];
  handleSubmitLink: (event: React.FormEvent) => void;
  itemList: dropDownListProps[];
  submittedProfile: submittedProfileProps | null;
  setSubmittedProfile: (profile: submittedProfileProps | null) => void;
  imageFile: string;
  setImageFile: (file: string) => void;
  errorMessage: string;
  blankProfile: string;
  setBlankProfile: (file: string) => void;
  blankListImg: number;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const defaultLinkProps: LinkContextProps = {
  Logout: () => {},
  addForm: [],
  handleAddForm: () => {},
  isFormClicked: false,
  handleSubmitForm: () => {},
  handleRemoveForm: () => {},
  openDropdownIndex: null,
  setOpenDropdownIndex: () => {},
  selectedItems: [],
  handleSelectItem: () => {},
  inputValues: [],
  inputError: false,
  handleInputChange: () => {},
  submittedData: [],
  handleSubmitLink: () => {},
  itemList: [],
  submittedProfile: null,
  setSubmittedProfile: () => {},
  imageFile: "/assets/upload-image.svg",
  setImageFile: () => {},
  errorMessage: "",
  blankProfile: "/assets/user.svg",
  setBlankProfile: () => {},
  blankListImg: 5,
  loading: false,
  setLoading: () => {},
  email: "",
  setEmail: () => {},
};

export interface submittedProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  imageFile: string;
}

export interface dropDownListProps {
  name: string;
  value: string;
  src: string;
  color: string;
}
