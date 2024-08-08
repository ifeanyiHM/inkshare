import {
  dropDownListProps,
  submittedProfileProps,
} from "../Data/ShareLinkProps";
import { supabase } from "../lib/supabase";

export async function getLinks(setLinks: (links: dropDownListProps[]) => void) {
  try {
    let { data: links, error } = await supabase.from("links").select("*");

    if (error) {
      console.error("Error fetching links:", error);
    } else {
      setLinks(links as dropDownListProps[]);
    }

    return links;
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

export async function createProfile(devProfile: submittedProfileProps) {
  const { data, error } = await supabase
    .from("profile")
    .upsert([devProfile])
    .select();

  if (error) {
    console.error("Error uploading information:", error.message);
    throw new Error("Information could not be uploaded");
  }
  console.log(data);
  return data;
}
