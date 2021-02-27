import React from "react";

import { BackArrow, Star, StarEmpty } from "../Icons";
import { useHistory } from "react-router-dom";

const Reviews = () => {
  const history = useHistory();

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #215BA5",
        display: "block",
        position: "absolute",
        height: "auto",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div style={{ padding: 20 }}>
        <div onClick={() => history.goBack()}>
          <BackArrow color="white" />
        </div>
      </div>

      <div
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: "25px 25px 0 0",
        }}
      >
        <p style={{ fontWeight: 700, fontSize: 30 }}>Отзывы</p>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center" }}>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p style={{ margin: "0 8px", fontWeight: 700, fontSize: 16 }}>5</p>
          <p style={{ fontWeight: 500, fontSize: 14 }}>(100 отзывов)</p>
        </div>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center" }}>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarEmpty />
          </div>
          <p style={{ margin: "0 8px", fontWeight: 700, fontSize: 16 }}>4</p>
          <p style={{ fontWeight: 500, fontSize: 14 }}>(50 отзывов)</p>
        </div>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center" }}>
          <div>
            <Star />
            <Star />
            <Star />
            <StarEmpty />
            <StarEmpty />
          </div>
          <p style={{ margin: "0 8px", fontWeight: 700, fontSize: 16 }}>3</p>
          <p style={{ fontWeight: 500, fontSize: 14 }}>(25 отзывов)</p>
        </div>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center" }}>
          <div>
            <Star />
            <Star />
            <StarEmpty />
            <StarEmpty />
            <StarEmpty />
          </div>
          <p style={{ margin: "0 8px", fontWeight: 700, fontSize: 16 }}>2</p>
          <p style={{ fontWeight: 500, fontSize: 14 }}>(15 отзывов)</p>
        </div>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center" }}>
          <div>
            <Star />
            <StarEmpty />
            <StarEmpty />
            <StarEmpty />
            <StarEmpty />
          </div>
          <p style={{ margin: "0 8px", fontWeight: 700, fontSize: 16 }}>1</p>
          <p style={{ fontWeight: 500, fontSize: 14 }}>(10 отзывов)</p>
        </div>

        <p style={{ marginTop: 30, fontWeight: 700, fontSize: 21 }}>Данил</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 8 }}>
            <Star width={14} height={13} />
            <Star width={14} height={13} />
            <Star width={14} height={13} />
            <Star width={14} height={13} />
            <StarEmpty width={14} height={13} />
          </div>
          <p style={{ fontWeight: 700, fontSize: 13 }}>4</p>
        </div>
        <p
          style={{
            fontWeight: 500,
            fontSize: 14,
            marginTop: 8,
            lineHeight: "23px",
          }}
        >
          С другой стороны начало повседневной работы по формированию позиции в
          значительной степени обуславливает создание модели развития.
          Значимость этих проблем настолько очевидна.
        </p>

        <p style={{ marginTop: 30, fontWeight: 700, fontSize: 21 }}>
          Екатерина
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 8 }}>
            <Star width={14} height={13} />
            <Star width={14} height={13} />
            <Star width={14} height={13} />
            <Star width={14} height={13} />
            <Star width={14} height={13} />
          </div>
          <p style={{ fontWeight: 700, fontSize: 13 }}>5</p>
        </div>
        <p
          style={{
            fontWeight: 500,
            fontSize: 14,
            marginTop: 8,
            lineHeight: "23px",
          }}
        >
          С другой стороны начало повседневной работы по формированию позиции в
          значительной степени обуславливает создание модели развития.
          Значимость этих проблем настолько очевидна.
        </p>

        <button
          className="btn btn-shadow"
          style={{ marginTop: 40, backgroundColor: "#215BA5" }}
        >
          Написать отзывы
        </button>
      </div>
    </div>
  );
};

export default Reviews;
