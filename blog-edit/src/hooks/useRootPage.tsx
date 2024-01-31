import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PostProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: string;
}

export default function useRootPage() {
  const [postsData, setPostsData] = useState<PostProps[]>([]);
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState<string>("newest");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelect = (event: any) => {
    setSelectValue(event.target.value);
  };

  const handleCardClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  const handlePostSorted = useCallback(
    (data: PostProps[]) => {
      if (selectValue === "newest") {
        const sortedPosts = data.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        setPostsData(sortedPosts);
      } else {
        const sortedPosts = data.sort(
          (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
        );
        setPostsData(sortedPosts);
      }
    },
    [selectValue]
  );

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data: PostProps[]) => {
        handlePostSorted(data);
      });
  }, [handlePostSorted, selectValue]);

  return {
    postsData,
    handleCardClick,
    selectValue,
    handleSelect,
  };
}
