"use client";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState } from "react";

interface LinkProviderProps {
  children: ReactNode;
}

interface LinkContextProps {
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
  submittedProfile: {
    firstName: string;
    lastName: string;
    email: string;
    imageFile: string;
  } | null;
  setSubmittedProfile: (
    profile: {
      firstName: string;
      lastName: string;
      email: string;
      imageFile: string;
    } | null
  ) => void;
  imageFile: string;
  setImageFile: (file: string) => void;
  errorMessage: string;
}

const defaultLinkProps: LinkContextProps = {
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
};

const dropDownList = [
  {
    name: "GitHub",
    value: "github",
    src: "/assets/github.svg",
    color: "#1A1A1A",
  },
  {
    name: "Frontend Mentor",
    value: "frontend",
    src: "/assets/frontend.svg",
    color: "#fff",
  },

  {
    name: "Twitter",
    value: "twitter",
    src: "/assets/twitter.svg",
    color: "#43B7E9",
  },
  {
    name: "Linkedin",
    value: "linkedin",
    src: "/assets/linkedin.svg",
    color: "#2D68FF",
  },
  {
    name: "YouTube",
    value: "youtube",
    src: "/assets/youtube.svg",
    color: "#EE3939",
  },
  {
    name: "Facebook",
    value: "facebook",
    src: "/assets/facebook.svg",
    color: "#2442AC",
  },
  {
    name: "Twitch",
    value: "twitch",
    src: "/assets/twitch.svg",
    color: "#EE3FC8",
  },
  {
    name: "Dev.to",
    value: "dev.to",
    src: "/assets/devto.svg",
    color: "#333333",
  },

  {
    name: "Codewars",
    value: "codewars",
    src: "/assets/codewars.svg",
    color: "#8A1A50",
  },

  {
    name: "FreeCodeCamp",
    value: "freecodecamp",
    src: "/assets/freecodecamp.svg",
    color: "#8A1A50",
  },
  {
    name: "Gitlab",
    value: "gitlab",
    src: "/assets/gitlab.svg",
    color: "#EB4925",
  },
  {
    name: "Hashnode",
    value: "hashnode",
    src: "/assets/hashnode.svg",
    color: "#0330D1",
  },
  {
    name: "Stack Overflow",
    value: "stackoverflow",
    src: "/assets/stackoverflow.svg",
    color: "#EC7100",
  },
];

interface dropDownListProps {
  name: string;
  value: string;
  src: string;
  color: string;
}

export const regex =
  /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(:\d+)?(\/[\w\-\.~!$&'()*+,;=:@%]*)*(\?[;\w\-\.~!$&'()*+,;=:@%]*)?(#[\w\-\.~!$&'()*+,;=:@%]*)?$/i;

const LinkContext = createContext<LinkContextProps>(defaultLinkProps);

function LinkProvider({ children }: LinkProviderProps) {
  //getting the links
  const [addForm, setAddForm] = useState<number[]>([]);
  const [isFormClicked, setIsFormClicked] = useState<boolean>(false);
  const [itemList, setItemList] = useState<dropDownListProps[]>(dropDownList);
  const [selectedItems, setSelectedItems] = useState<number[]>(
    addForm.map(() => 0)
  );
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [inputError, setInputError] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<dropDownListProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  // setting of profile
  const [submittedProfile, setSubmittedProfile] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    imageFile: string;
  } | null>(null);
  const [imageFile, setImageFile] = useState<string>(
    "/assets/upload-image.svg"
  );

  const router = useRouter();

  function handleSelectItem(formIndex: number, itemIndex: number) {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems];
      newSelectedItems[formIndex] = itemIndex;
      return newSelectedItems;
    });
    setOpenDropdownIndex(null);
  }

  function handleInputChange(formIndex: number, value: string) {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[formIndex] = value;
      return newInputValues;
    });
  }

  //open the form page
  const handleAddForm = () => {
    setAddForm((prev) => [...prev, prev.length + 1]);
    router.push("/overview/addLink/links");
    setIsFormClicked(true);
    setSelectedItems((prev) => [...prev, 0]);
  };

  function handleSubmitLink(event: React.FormEvent) {
    event.preventDefault();

    const newSubmittedData = addForm.map((number, formIndex) => {
      const selectedItem = itemList[selectedItems[formIndex]];
      const inputValue = inputValues[formIndex];

      return {
        name: selectedItem?.name || "No selection",
        value: inputValue || "No input",
        src: selectedItem?.src || "",
        color: selectedItem?.color || "",
      };
    });
    setSubmittedData((prevData) => [...prevData, ...newSubmittedData]);
    setInputValues([]);
    setSelectedItems(addForm.map(() => 0));
  }

  function checkForm() {
    let hasError = false;
    let errorMessage = "";

    addForm.forEach((_, index) => {
      const inputValue = inputValues[index];
      if (!inputValue) {
        hasError = true;
        errorMessage = "Can't be empty";
      } else if (!regex.test(inputValue)) {
        hasError = true;
        errorMessage = "Please check the URL";
      }
    });

    setInputError(hasError);
    setErrorMessage(errorMessage);
    return hasError;
  }

  //submit the form
  function handleSubmitForm(event: React.FormEvent) {
    event.preventDefault();

    const hasError = checkForm();
    if (hasError) {
      return;
    }

    handleSubmitLink(event);
    setIsFormClicked(false);
    setAddForm([]);
    router.push("/timeline");
  }

  //delete form
  const handleRemoveForm = (index: number) => {
    setAddForm((prev) => {
      const newAddForm = prev.filter((_, i) => i !== index);
      if (newAddForm.length === 0) {
        setIsFormClicked(false);
        router.push("/overview/addLink");
      }
      return newAddForm;
    });
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <LinkContext.Provider
      value={{
        addForm,
        handleAddForm,
        isFormClicked,
        handleSubmitForm,
        handleRemoveForm,
        openDropdownIndex,
        setOpenDropdownIndex,
        selectedItems,
        handleSelectItem,
        inputValues,
        inputError,
        handleInputChange,
        submittedData,
        handleSubmitLink,
        itemList,
        submittedProfile,
        setSubmittedProfile,
        imageFile,
        setImageFile,
        errorMessage,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}

export { LinkProvider, LinkContext };
