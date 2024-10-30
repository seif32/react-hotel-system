import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
    onSuccess: () => {
      console.log("Success");
    },
    onError: () => console.error(error),
  });
  return { settings, isLoading, error };
}
