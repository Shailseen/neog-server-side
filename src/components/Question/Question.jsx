import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  setDoc,
  Timestamp,
  addDoc,
  collection,
} from "firebase/firestore";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Merge } from "@mui/icons-material";

export const Question = () => {
  const [isDataUploaded, setIsDataUploaded] = useState("");
  const [question, setQuestion] = useState("");
  const [title,setTitle] = useState("");
  const [codeSignature, setCodeSigntaure] = useState("");
  const [tag, setTag] = useState("Easy");
  const [relatedTopic, setRelatedTopic] = useState("");
  const [tcDatatype, setTcDatatype] = useState("String");
  const [answerDatatype, setAnswerDatatype] = useState("String");

  const [testCase1, setTestCase1] = useState("");
  const [answer1, setAnswer1] = useState("");

  const [testCase2, setTestCase2] = useState("");
  const [answer2, setAnswer2] = useState("");

  const [testCase3, setTestCase3] = useState("");
  const [answer3, setAnswer3] = useState("");

  const [testCase4, setTestCase4] = useState("");
  const [answer4, setAnswer4] = useState("");

  const [testCase5, setTestCase5] = useState("");
  const [answer5, setAnswer5] = useState("");

  const [testCase6, setTestCase6] = useState("");
  const [answer6, setAnswer6] = useState("");

  const [testCase7, setTestCase7] = useState("");
  const [answer7, setAnswer7] = useState("");

  const [testCase8, setTestCase8] = useState("");
  const [answer8, setAnswer8] = useState("");

  const [testCase9, setTestCase9] = useState("");
  const [answer9, setAnswer9] = useState("");

  const [testCase10, setTestCase10] = useState("");
  const [answer10, setAnswer10] = useState("");

  const filledData = () => {
    setAnswer1("shailesh");
    setAnswer2("cde");
    setAnswer3("aaaa");
    setAnswer4("aaaaa");
    setAnswer5("aakksank");
    setAnswer6("asks");
    setAnswer7("abcd");
    setAnswer8("bcba");
    setAnswer9("vgvg");
    setAnswer10("bbbbbbbbbbb");
    setTestCase1("vishal,shailesh");
    setTestCase2("ab,cde");
    setTestCase3("aaa,aaaa");
    setTestCase4("aaa,aaaa,aaaaa");
    setTestCase5("aakksank,jkjkj,kk,w");
    setTestCase6("asks,dd");
    setTestCase7("abcd,yd");
    setTestCase8("ab,bcba");
    setTestCase9("ab,vgvg");
    setTestCase10("asssssd,aaaaaaa,bbbbbbbbbbb");
    setQuestion(
      "Given an array of names ,return the name with maximum length."
    );
    setCodeSigntaure("const longestName = (arr) => {};");
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  const firebaseConfig = {
    apiKey: "AIzaSyB_buVcpv0maTgwt7MDjHM6ux0BFIUUg24",
    authDomain: "neogqod.firebaseapp.com",
    projectId: "neogqod",
    storageBucket: "neogqod.appspot.com",
    messagingSenderId: "4959195096",
    appId: "1:4959195096:web:c99195a7b4412c4fceacad",
    measurementId: "G-KZKGG29D9E",
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore();

  // const questionOfTheDay = doc(firestore, "questions", "");

  function clickHandler() {
    console.log(1);
    let tcParser = null;
    let answerParser = null;
    const rt = JSON.stringify(relatedTopic.split(","));
    console.log(tag);
    switch (tcDatatype) {
      case "String":
        tcParser = stringParser;
        break;
      case "String-Array":
        tcParser = stringArrparser;
        break;
      case "String-Two-Dimensional-Array":
        tcParser = string2dArrParser;
        break;
      case "Number":
        tcParser = numberParser;
        break;
      case "Number-Array":
        tcParser = numberArrparser;
        break;
      case "Number-Two-Dimensional-Array":
        tcParser = number2dArrParser;
        break;
      default:
        console.log(tcDatatype);
        break;
    }

    switch (answerDatatype) {
      case "String":
        answerParser = stringParser;
        break;
      case "String-Array":
        answerParser = stringArrparser;
        break;
      case "String-Two-Dimensional-Array":
        answerParser = string2dArrParser;
        break;
      case "Number":
        answerParser = numberParser;
        break;
      case "Number-Array":
        answerParser = numberArrparser;
        break;
      case "Number-Two-Dimensional-Array":
        answerParser = number2dArrParser;
        break;
      default:
        console.log(tcDatatype);
        break;
    }
    const testcaseArray = [
      JSON.stringify(tcParser(testCase1)),
      JSON.stringify(tcParser(testCase2)),
      JSON.stringify(tcParser(testCase3)),
      JSON.stringify(tcParser(testCase4)),
      JSON.stringify(tcParser(testCase5)),
      JSON.stringify(tcParser(testCase6)),
      JSON.stringify(tcParser(testCase7)),
      JSON.stringify(tcParser(testCase8)),
      JSON.stringify(tcParser(testCase9)),
      JSON.stringify(tcParser(testCase10)),
    ];
    const answerArray = [
      JSON.stringify(answerParser(answer1)),
      JSON.stringify(answerParser(answer2)),
      JSON.stringify(answerParser(answer3)),
      JSON.stringify(answerParser(answer4)),
      JSON.stringify(answerParser(answer5)),
      JSON.stringify(answerParser(answer6)),
      JSON.stringify(answerParser(answer7)),
      JSON.stringify(answerParser(answer8)),
      JSON.stringify(answerParser(answer9)),
      JSON.stringify(answerParser(answer10)),
    ];

    const docData = {
      question: question,
      title: title,
      tag: tag,
      testCaseArr: testcaseArray,
      tcDatatype: tcDatatype,
      answerDatatype: answerDatatype,
      answerArr: answerArray,
      signature: codeSignature,
      related: rt,
    };
    console.log(3);
    console.log(docData);

    addDoc(collection(firestore, "questions"), docData)
      .then(() => {
        setIsDataUploaded("Data uploaded Successfully");
      })
      .catch((error) => {
        setIsDataUploaded("Something went wrong!!!");
      });

    // addDoc(collection(firestore,"questions"),docData)
    //   .then(() => {
    //     console.log("data uploaded");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          margin: "2rem auto",
        }}
      >
        <Typography variant="h4" component="div">
          Add questions to the database
        </Typography>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <TextField
            onChange={(e) => setQuestion(e.target.value)}
            id="outlined-basic"
            label="Question"
            variant="outlined"
          />

          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />

          <FormControl>
            <FormLabel
              sx={{ textAlign: "left" }}
              id="demo-radio-buttons-group-label"
            >
              Testcase Datatype
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="String"
              name="radio-buttons-group"
              onChange={(value) => setTcDatatype(value.target.value)}
            >
              <FormControlLabel
                value="String"
                control={<Radio />}
                label="String"
              />
              <FormControlLabel
                value="String-Array"
                control={<Radio />}
                label="String-Array"
              />
              <FormControlLabel
                value="String-Two-Dimensional-Array"
                control={<Radio />}
                label="String-Two-Dimensional-Array"
              />
              <FormControlLabel
                value="Number"
                control={<Radio />}
                label="Number"
              />
              <FormControlLabel
                value="Number-Array"
                control={<Radio />}
                label="Number-Array"
              />
              <FormControlLabel
                value="Number-Two-Dimensional-Array"
                control={<Radio />}
                label="Number-Two-Dimensional-Array"
              />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel
              sx={{ textAlign: "left" }}
              id="demo-radio-buttons-group-label"
            >
              Answer Datatype
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="String"
              name="radio-buttons-group"
              onChange={(value) => setAnswerDatatype(value.target.value)}
            >
              <FormControlLabel
                value="String"
                control={<Radio />}
                label="String"
              />
              <FormControlLabel
                value="String-Array"
                control={<Radio />}
                label="String-Array"
              />
              <FormControlLabel
                value="String-Two-Dimensional-Array"
                control={<Radio />}
                label="String-Two-Dimensional-Array"
              />
              <FormControlLabel
                value="Number"
                control={<Radio />}
                label="Number"
              />
              <FormControlLabel
                value="Number-Array"
                control={<Radio />}
                label="Number-Array"
              />
              <FormControlLabel
                value="Number-Two-Dimensional-Array"
                control={<Radio />}
                label="Number-Two-Dimensional-Array"
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase1(() => e.target.value)}
              value={testCase1}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase1"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer1(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer1"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase2(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase2"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer2(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer2"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase3(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase3"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer3(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer3"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase4(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase4"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer4(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer4"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase5(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase5"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer5(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer5"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase6(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase6"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer6(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer6"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase7(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase7"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer7(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer7"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase8(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase8"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer8(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer8"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase9(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase9"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer9(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer9"
              variant="outlined"
            />
          </Typography>

          <Typography variant="div">
            <TextField
              onChange={(e) => setTestCase10(e.target.value)}
              placeholder="Enter testcase with comma seprated"
              id="outlined-basic"
              label="Testcase10"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAnswer10(e.target.value)}
              id="outlined-basic"
              placeholder="Enter answers with comma seprated"
              label="Answer10"
              variant="outlined"
            />
          </Typography>

          <TextField
            onChange={(e) => setCodeSigntaure(e.target.value)}
            id="outlined-basic"
            placeholder="Code signature"
            label="Signature"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setRelatedTopic(e.target.value)}
            id="outlined-basic"
            label="Related topics"
            placeholder="Enter related topic with comma seprated"
            variant="outlined"
          />
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ textAlign: "left" }}
            >
              Tag
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Easy"
              name="radio-buttons-group"
              onChange={(value) => setTag(value.target.value)}
            >
              <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
              <FormControlLabel
                value="Medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => clickHandler()}
            size="small"
            variant="contained"
          >
            Add Question
          </Button>

          <Button onClick={() => filledData()} size="small" variant="contained">
            fill
          </Button>
          <Typography variant="div">{isDataUploaded}</Typography>
        </CardActions>
      </Card>
    </>
  );
};

const stringInput = "naman";
const stringParser = (str) => {
  return str;
};
// console.log(stringParser(stringInput));

const stringArrInput = "abc,aaa,abdbfb,nndn";
const stringArrparser = (str) => {
  const arr = [];
  str.split(",").forEach((it) => arr.push(it));
  return arr;
};
// console.log(stringArrparser(stringArrInput));

const string2dArrInput = "[['ege','dwrg'],['wregw'],['r','e','q']]";
const string2dArrParser = (str) => {
  const arr = [];
  const newStr = str.substring(2, str.length - 2);
  newStr.split("],[").forEach((it) => {
    arr.push(it.substring(1, it.length - 1).split("','"));
  });
  return arr;
};
// console.log(string2dArrParser(string2dArrInput));

const numberInput = "45";
const numberParser = (str) => {
  return parseInt(str);
};
// console.log(numberParser(numberInput));

const numberArrInput = "45,23,45";
const numberArrparser = (str) => {
  const arr = [];
  str.split(",").forEach((it) => arr.push(parseInt(it)));
  return arr;
};
// console.log(numberArrparser(numberArrInput));

const number2dArrInput = "[['34','254'],['232'],['1','23','23']]";
const number2dArrParser = (str) => {
  const arr = [];
  const newStr = str.substring(2, str.length - 2);
  newStr.split("],[").forEach((it) => {
    const temp = it.substring(1, it.length - 1);
    const tempArr = [];
    temp.split("','").forEach((it) => {
      tempArr.push(parseInt(it));
    });
    arr.push(tempArr);
  });
  return arr;
};
// console.log(number2dArrParser(number2dArrInput));
