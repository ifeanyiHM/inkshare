"use client";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState } from "react";
import { dropDownList } from "../Data/LinkListData";
import {
  defaultLinkProps,
  dropDownListProps,
  LinkContextProps,
  submittedProfileProps,
} from "../Data/ShareLinkProps";

interface LinkProviderProps {
  children: ReactNode;
}

export const regex =
  /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(:\d+)?(\/[\w\-\.~!$&'()*+,;=:@%]*)*(\?[;\w\-\.~!$&'()*+,;=:@%]*)?(#[\w\-\.~!$&'()*+,;=:@%]*)?$/i;

const LinkContext = createContext<LinkContextProps>(defaultLinkProps);

function LinkProvider({ children }: LinkProviderProps) {
  //getting the links

  const [inputValues, setInputValues] = useState<string[]>([]);
  const [inputError, setInputError] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<dropDownListProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [addForm, setAddForm] = useState<number[]>([]);
  const [isFormClicked, setIsFormClicked] = useState<boolean>(false);
  const [itemList, setItemList] = useState<dropDownListProps[]>(dropDownList);
  const [blankProfile, setBlankProfile] = useState<string>("/assets/user.svg");

  const [selectedItems, setSelectedItems] = useState<number[]>(
    addForm.map(() => 0)
  );

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const [submittedProfile, setSubmittedProfile] =
    useState<submittedProfileProps | null>(null);

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
        blankProfile,
        setBlankProfile,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}

export { LinkProvider, LinkContext };
