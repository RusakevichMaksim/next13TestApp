import Link from "next/link";

type StaticProps = {
  params: {
    slug: string;
  };
};

async function getApi(path: String) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`); // The result is cached
  return res.json();
}

const Shop = async ({ params }: StaticProps) => {
  const path = params?.slug?.replace(/-/g, "/");
  const testNewSSR = await getApi(path);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "10px" }}>
        <div>slug</div>
        <div>{params?.slug}</div>
      </div>
      <div>
        <Link
          style={{ backgroundColor: "green", padding: "10px", color: "white" }}
          href={"/"}
        >
          НАЗАД
        </Link>
      </div>

      <div style={{ marginTop: "20px", paddingLeft: "5px" }}>
        {testNewSSR?.body
          ? testNewSSR?.body
          : testNewSSR?.title
          ? testNewSSR?.title
          : testNewSSR?.phone}
      </div>
    </div>
  );
};

export default Shop;
