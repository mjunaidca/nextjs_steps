import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

async function GetContent() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_KEY}&content_type=bloga`
    // `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_KEY}&content_type=mjsProjects`
  );

  if (!res.ok) {
    throw new Error("Failed to get content");
  }

  return res.json();
}

const Content = async () => {
  const blogs = await GetContent();

  console.log(blogs);

  return (
    <div>
      {blogs.items.map((item: any) => (
        <>
          <div>{item.fields.title}</div>
          <div>{documentToReactComponents(item.fields.description)}</div>

          <div>
            {blogs.includes.Asset.map((a: any) => (
              <div>
                {item.fields.img && item.fields.img.sys.id === a.sys.id ? (
                  <Image
                    src={"https:" + a.fields.file.url}
                    alt=""
                    width="100"
                    height="100"
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>

          <div>
            {" "}
            {blogs.includes.Entry.map((entry: any) => (
              <div>
                {item.fields.createdBy &&
                item.fields.createdBy.sys.id === entry.sys.id ? (
                  <div>Author: {entry.fields.name}</div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}{" "}
          </div>
        </>
      ))}
    </div>
  );
};

export default Content;
