import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: ' ',
    ninkname: ' '
  })

  const [name, ninkname] = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name='nickname' value={ninkname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {ninkname}
        </div>
      </div>
    </div>
  );
};

export default Info;
