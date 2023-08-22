import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from "@mui/material/Select";
import "./Form.css";

const GoogleFormClone = () => {
  const [radioOption, setRadioOption] = useState("");
  const [checkBoxes, setCheckBoxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [textFieldValue, setTextFieldValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [grid, setGrid] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);

  const handleClick = (event, rowIndex, columnIndex) => {
    const newGrid = [...grid];
    newGrid[rowIndex][columnIndex] = event.target.checked;
    setGrid(newGrid);
  };
  const [radio, setRadio] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);

  const handleClicks = (event, rowIndex, columnIndex) => {
    const newRadio = [...radio];
    newRadio[rowIndex][columnIndex] = true; 
    setRadio(newRadio);
  };
  const handleRatingChange = (event) => {
    setSelectedRadio(event.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleFileClick = () => {
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      window.open(fileUrl, "_blank");
    }
  };
  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setCheckBoxes({
      ...checkBoxes,
      [name]: checked,
    });
  };

  const handleTextChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };
  const handleRemoveFile = () => {
    setSelectedFile(null); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Radio Option:", radioOption);
    console.log("Checkboxes:", checkBoxes);
    console.log("Text Field Value:", textFieldValue);
    console.log("Dropdown Value:", dropdownValue);
    setRadioOption("");
    setCheckBoxes({
      option1: false,
      option2: false,
      option3: false,
    });
    setTextFieldValue("");
    setDropdownValue("");
  };
  const handleClear = () => {
    setRadioOption(""); // Reset radio option
    setCheckBoxes({ option1: false, option2: false, option3: false }); // Reset checkboxes
    setTextFieldValue(""); // Reset text field
    setDropdownValue(""); // Reset dropdown
    setSelectedFile(null); // Reset file upload
    setSelectedRadio(''); // Reset radio buttons
    setGrid([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]); // Reset grid for checkboxes
    setRadio([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]); // Reset grid for radio buttons
  };


  return (
    <>
      <h1>Google Form Clone</h1>
      <div className="container">
        <div className="options">
          <label htmlFor="demo-simple-select" className="label">
            MCQ
          </label>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="Option 1"
              checked={radioOption === "Option 1"}
              onChange={handleRadioChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="Option 2"
              checked={radioOption === "Option 2"}
              onChange={handleRadioChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="Option 3"
              checked={radioOption === "Option 3"}
              onChange={handleRadioChange}
            />
            Option 3
          </label>
        </div>
      </div>
      <div className="container">
        <div className="checkboxes">
          <label htmlFor="demo-simple-select" className="label">
            Checkbox
          </label>
          <label>
            <input
              type="checkbox"
              name="option1"
              checked={checkBoxes.option1}
              onChange={handleCheckBoxChange}
            />
            <span className="check-text">Option 1</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="option2"
              checked={checkBoxes.option2}
              onChange={handleCheckBoxChange}
            />
            <span className="check-text">Option 2</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="option3"
              checked={checkBoxes.option3}
              onChange={handleCheckBoxChange}
            />
            <span className="check-text">Option 3</span>
          </label>
        </div>
      </div>
      <div className="container">
        <label htmlFor="demo-simple-select" className="label">
          Short Answer
        </label>
        <div className="text-field">
          <TextField
            type="text"
            variant="standard"
            value={textFieldValue}
            sx={{ marginRight: "300px" }}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="container">
        <div className="text-field">
          <label htmlFor="demo-simple-select" className="label">
            Paragraph
          </label>
          <TextField
            type="text"
            variant="standard"
            value={textFieldValue}
            sx={{ width: "400px", marginRight: "90px" }}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="container">
        <div className="dropdown">
          <label htmlFor="demo-simple-select" className="label">
            Drop Down
          </label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dropdownValue}
            label="Choose"
            onChange={handleDropdownChange}
            sx={{ width: "200px" }}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </div>
      </div>
      <div className="container">
        <label htmlFor="demo-simple-select" className="label">
          File Upload
        </label>
        <div className="file-upload">
          {selectedFile ? (
            <div className="file-label">
              <span onClick={handleFileClick}>{selectedFile.name}</span>
              <button className="remove-button" onClick={handleRemoveFile}>
                <DeleteIcon />
              </button>
            </div>
          ) : (
            <label htmlFor="file-input">
              <CloudUploadIcon /> Add File
            </label>
          )}
          <input
            type="file"
            id="file-input"
            accept=".pdf, .doc, .docx, .txt, .jpg, .jpeg, .png, .gif"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="container">
        <div className="rating">
          <label className="label">Linear Scale</label>
          <div className="radio-row">
          <label className="labels"> Worst</label>   
            <label className="radio-label">
              <input
                type="radio"
                name="rating"
                value="Option 1"
                checked={selectedRadio === 'Option 1'}
                onChange={handleRatingChange}
              />
               1
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="rating"
                value="Option 2"
                checked={selectedRadio === 'Option 2'}
                onChange={handleRatingChange}
              />
               2
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="rating"
                value="Option 2"
                checked={selectedRadio === 'Option 3'}
                onChange={handleRatingChange}
              />
               3
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="rating"
                value="Option 4"
                checked={selectedRadio === 'Option 4'}
                onChange={handleRatingChange}
              />
               4
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="rating"
                value="Option 5"
                checked={selectedRadio === 'Option 5'}
                onChange={handleRatingChange}
              />
               5
            </label>
            <label className="labels"> Best</label>   

          </div>
     
      </div>
      </div>
      <div className="container">
      <label htmlFor="demo-simple-select" className="label">
      Multi choice Grid
          </label>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {radio.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>Row {rowIndex + 1}</td>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="radio" 
                    name={`row-${rowIndex}`} 
                    checked={cell}
                    onChange={(event) => handleClicks(event, rowIndex, columnIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <div className="container">
      <label htmlFor="demo-simple-select" className="label">
      Tick box Grid         
       </label>
      <table>
      <thead>
        <tr>
          <th></th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>Row {rowIndex + 1}</td>
            {row.map((cell, columnIndex) => (
              <td key={columnIndex}>
                <input
                  type="checkbox"
                  checked={cell}
                  onChange={event => handleClick(event, rowIndex, columnIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="button-row">

        <button onClick={handleSubmit}   style={{ width: "200px" }} >Submit</button>
        <button onClick={handleClear}style={{ width: "200px" }}>Clear</button>
      </div>

    </>
  );
};

export default GoogleFormClone;
