import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useFetch = ({
  url,
  method = "GET",
  headers,
  body,
  ...moreOption
}: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const methodForBody = "post,put,patch";
  const allowBody = new RegExp(method.toLowerCase()).test(methodForBody);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: allowBody ? JSON.stringify(body) : null,
          ...moreOption,
        });

        const respData: any = await resp.json();
        setData(respData);
      } catch (err) {
        toast.error("Failed to get data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { loading, data };
};
