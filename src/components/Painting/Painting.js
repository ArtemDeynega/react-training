import PropTypes from "prop-types";
import defaultImg from "./default.jpeg";
import s from "./Painting.module.css";

const Painting = ({
  url = defaultImg,
  title,
  author = "не известен",
  authorUrl,
  price,
  quantity,
}) => (
  <div className={s.container}>
    <img src={url ?? defaultImg} alt={title} width="360" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={authorUrl}>{author}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
    <button type="button">Добавить в корзину</button>
  </div>
);
Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
