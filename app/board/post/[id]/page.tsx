"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ErrorWithMsg } from "@libs/myAlert";
import { Button, Label, TextInput } from "flowbite-react";

const API = process.env.SSDA_API ?? "https://api.ssda.dawoony.com";
// const API = "http://127.0.0.1:8080";

export interface IDetailInfo {
  id: number;
  title: string;
  fontName: string;
  fontGenerator: string;
  imageFile: string;
}

export default function Post() {
  const { data: session } = useSession();
  const [post, setPost] = useState<IDetailInfo>();
  const uid = usePathname()?.split("/")[3];
  const [isLoading, setIsLoading] = useState(false);
  const [svg, setSvg] = useState<string>("");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (session?.user.accessToken !== null) getPost();
  }, [session]);

  const getPost = async () => {
    const response = await fetch(`${API}/api/board/${uid}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
      },
    });
    console.log("response", response);

    if (response.ok) {
      const data = await response.json();
      setPost(data);
      console.log("data", post);
    }
  };

  const createSVG = async () => {
    await fetch(`${API}/api/ml/svg`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({
        fontOwner: "MSY",
        fontName: post?.fontName,
        text: text,
      }),
    })
      .then(res => {
        if (res.ok == false) {
          throw new Error(res.statusText);
        }
        setIsLoading(false);
        return res.json();
      })
      .then(obj => {
        setSvg(obj.data);
        console.log("svg", svg);
      })
      .catch(err => {
        ErrorWithMsg("이미지 저장 실패", "이미지 저장에 실패했습니다." + err);
        setIsLoading(false);
      });
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(svg);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <section className="h-screen">
      <div className="container my-4 flex flex-col justify-center px-4 md:container md:mx-auto">
        <div className="flex justify-between">
          <div className="relative mb-6">
            <label className="block">
              <span className="afFter:content-['*']  block text-2xl font-medium text-slate-700 after:ml-0.5 after:text-red-500">
                {post?.title}
              </span>
              <span className="afFter:content-['*']  block text-lg font-medium text-slate-600 after:ml-0.5 after:text-red-500">
                By. {post?.fontGenerator}
              </span>
            </label>
          </div>
          <div>
            <button className="mb-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
              삭제
            </button>
          </div>
        </div>
        <div className="relative mb-6">
          {/* <Image width={500} height={500} src={`/${post?.imageFile}`} alt="Font Image" /> */}
          {svg && (
            <div
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          )}
        </div>
        <div>
          <div className="flex max-w-md flex-col gap-4">
            <div className="mb-2 block">
              <Label htmlFor="text" value="원하는 글자를 입력해주세요." />
            </div>
            <TextInput
              id="text"
              sizing="md"
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Button color={"purple"} onClick={() => createSVG()}>
              {isLoading ? (
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                <>폰트 만들기</>
              )}
            </Button>
            <Button onClick={() => handleCopyClipBoard()}>복사하기</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
