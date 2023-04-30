interface CardProps {
  background_image: string;
  name: string;
}

const Card = ({ background_image, name }: CardProps) => {
  return (
    <div className="flex flex-col m-2 rounded overflow-hidden">
      <img
        src={background_image}
        alt="bg-image"
        className="h-36 object-cover object-top"
        loading="lazy"
      />
      <p className="text-2xl font-bold">{name}</p>
    </div>
  );
};

export default Card;
