import "./index.scss";

const Animation = ({ letterClass, strArray, idx }: any) => {
  return (
    <span>
      {strArray.map((char: any, i: any) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Animation;
