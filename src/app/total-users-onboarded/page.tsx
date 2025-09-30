"use client";
import { fetchWaitlist } from "@/lib/auth";
import { useState, useEffect } from "react";

export default function TotalUsers() {
  const [list, setList] = useState<
    { id: string; name: string; email: string; phone: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWaitlist();
      setList(data);
    };
    fetchData();
  }, []);

  return <div>{list.length}</div>;
}
