type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const hasValidPicture = picture && picture !== '' && !picture.includes('placeholder');

  return (
    <div className="flex items-center">
      {hasValidPicture ? (
        <img src={picture} className="w-12 h-12 rounded-full mr-4 object-cover" alt={name} />
      ) : (
        <div className="w-12 h-12 rounded-full mr-4 bg-primary text-white flex items-center justify-center font-semibold">
          {getInitials(name)}
        </div>
      )}
      <div className="text-xl font-normal">{name}</div>
    </div>
  );
};

export default Avatar;
