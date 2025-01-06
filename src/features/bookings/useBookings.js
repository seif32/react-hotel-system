import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export default function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  console.log("useBookings hook state:", { isLoading, bookings, error }); // Debug print

  return { isLoading, bookings, error };
}
