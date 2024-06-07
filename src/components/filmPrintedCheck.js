import React from 'react';

class FilmCheckbox extends React.Component {

    checkboxes = {};
    handleCheckboxChange = () => {
        const selectedCheckboxes = Object.keys(this.checkboxes)
        .filter((key) => this.checkboxes[key].checked)
        .map((key) => key);
        console.log(selectedCheckboxes);
    };

  render() {
    return (
      <div onChange={this.handleCheckboxChange}>
        <label class="form-check-label">
          <input class="form-check-input p-2 checkBoxRight" type="checkbox" ref={(ref) => (this.checkboxes["films"] = ref)} />
          
            Film(s) Printed

        </label>
        {/* Additional checkboxes */}
      </div>
    );
  }
}

export default FilmCheckbox;