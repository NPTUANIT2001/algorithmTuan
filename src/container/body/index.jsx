import { useState } from "react";
import "./styles.scss";
const Body = () => {
  let a = `"A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

  The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
  
  The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family.""`;
  let b = `"Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!""`;
  let c = `"The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'""`;
  let e = `"A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?""`;
  const d = [a, b, c, e];
  const [story, setStory] = useState(d[0]);

  var [i, seti] = useState(1);

  const hand = () => {
    if (i >= d.length) {
      setStory(`"That's all the jokes for today! Come back another day!"`);
    } else {
      console.log(i);
      setStory(d[i]);
      seti(++i);
    }
  };

  return (
    <>
      <div className="body-container">
        <div className="body-content">
          <p className="text-center content-story">{story}</p>
        </div>
        <hr color="gray" width="800px" style={{ marginTop: "50px" }} />
        <div className="button">
          <button
            type="button"
            className="btn btn-primary btn-lg me-4 "
            onClick={hand}
            style={{ width: "300px " }}
          >
            This is Funny!
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg  "
            onClick={hand}
            style={{ width: "300px" }}
          >
            This is not Funny!
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
