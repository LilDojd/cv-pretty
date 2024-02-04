import { getData } from "@/data";
import { getStaticParams } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const data = getData();

  if (process.env.NODE_ENV !== "development") {
    redirect("/" + locale);
  }

  return (
    <div className="flex h-dvh items-center justify-center">
      <div
        id="canvas"
        className="flex aspect-video h-[640px] items-center gap-12 px-32"
      >
        <div>
          <Image
            src={data.avatarUrl}
            alt=""
            width={240}
            height={240}
            className="rounded-xl shadow-2xl shadow-blue-400/20"
          />
        </div>
        <div className="*:leading-none">
          {data.globalName && (
            <p className="text-muted-foreground mb-4 text-2xl">
              {data.globalName}
            </p>
          )}
          <h1 className="mb-4 text-5xl font-bold">{data.name}</h1>
          <p className="text-muted-foreground text-3xl">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
