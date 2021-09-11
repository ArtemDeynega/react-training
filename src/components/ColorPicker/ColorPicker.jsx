import c from "./ColorPicker.module.css";

export const ColorPicker = ({ options }) => {
  return (
    <div className={c.container}>
      <h2 className={c.title}>Color Picker</h2>
      <div>
        {options.map((option) => (
          <span
            key={option.label}
            className={c.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
