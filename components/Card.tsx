import Link from "next/link";

interface Card {
  url: string;
  image_filename: string;
  title: string;
  description: string;
}

export default function Card(
  {
    url,
    image_filename,
    title,
    description,
  }: Card
) {
  return (
    <div className='w-full flex flex-col items-center gap-y-2'>
      <Link href={url}>
        <img
          src={`/img/${image_filename}.png`}
          width={350}
          height={149}
          alt={`${title} Banner`}
          style={{borderRadius: 10}}
          className="border border-gray-200"
        />
      </Link>
      <div className='flex flex-col items-start'>
        <h2 className='font-bold'>{title}</h2>
        <p className='text-justify leading-4'>{description}</p>
      </div>
    </div>
  )
}