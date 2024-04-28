import data from "../Accordion/data.js";
import { useState } from "react";
import Style from "./Accordion.module.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
const Accordion = () => {
  const [selected, setSelected] = useState(false);
  const [enableMultiSection, setEnableMultiSection] = useState(false);
  const [multiSelectId, setMultiSelectId] = useState([]);

  const handleSingleSelected = (currrentId) => {
    setSelected(currrentId === selected ? false : currrentId);
  };

  const handleMultiSetlection = (currrentId) => {
    let copyMultiSelectId = [...multiSelectId];

    const indexOfCurrentId = copyMultiSelectId.indexOf(currrentId);

    console.log(indexOfCurrentId);
    if (indexOfCurrentId === -1) {
      copyMultiSelectId.push(currrentId);
    } else {
      copyMultiSelectId.splice(indexOfCurrentId, 1);
    }

    setMultiSelectId(copyMultiSelectId);
  };

  return (
    <div className={Style.wrapper}>
      <button
        className={Style.btn}
        onClick={() => setEnableMultiSection(!enableMultiSection)}
      >
        {enableMultiSection ? "Disable" : "Enable"} Multiple Selection
      </button>
      <div className={Style.accordion}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className={Style.item} key={dataItem.id}>
              <div
                className={Style.title}
                onClick={
                  enableMultiSection
                    ? () => handleMultiSetlection(dataItem.id)
                    : () => handleSingleSelected(dataItem.id)
                }
              >
                <h2>{dataItem.question}</h2>
                <span className={Style.icon}>{selected == dataItem.id || multiSelectId.indexOf(dataItem.id) !== -1 ?   <BiSolidDownArrow /> : <BiSolidRightArrow /> }</span>
              </div>
              <div className={Style.check}>
                {selected === dataItem.id ||
                multiSelectId.indexOf(dataItem.id) !== -1 ? (
                  <div className={Style.content}>{dataItem.answer}</div>
                ) : (
                  false
                )}
              </div>
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
