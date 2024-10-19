import Link from "next/link";

interface SocialMediaButtonProps {
  url: string;
  image_filename: string;
}

export default function SocialMediaButton(
  {
    url,
    image_filename
  } : SocialMediaButtonProps
) {
  return (
    <>
      <Link href={url}>
        <img
          src={`/img/${image_filename}.png`}
          width={40}
          height={40}
          alt={`Haries' ${image_filename.toUpperCase()} Profile`}
        />
      </Link>
    </>
  )
}