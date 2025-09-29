import { fetchWaitlist } from "@/lib/auth";

export default async function TotalUsers() {
  const data = await fetchWaitlist();
  console.log(data.length);
  return <div>{data.length}</div>;
}
