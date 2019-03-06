/* eslint-disable react/prop-types, react/jsx-handler-names */

import React, { memo } from "react"
import CreateableSelect from "react-select/lib/Creatable"
import NoSsr from "@material-ui/core/NoSsr"
import Control from "./components/Control"
import Option from "./components/Option"
import Menu from "./components/Menu"
import MultiValue from "./components/MultiValue"
import NoOptionsMessage from "./components/NoOptionsMessage"
import ValueContainer from "./components/ValueContainer"

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  ValueContainer,
}

function AutoCompleteSelect ({ onChange, value, placeholder, options, label }){
  return (
    <div>
      <NoSsr>
        <CreateableSelect
          textFieldProps={{
            label: label,
            InputLabelProps: {
              shrink: true,
            },
          }}
          options={options}
          components={components}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isMulti
        />
      </NoSsr>
    </div>
  )
}

export default memo(AutoCompleteSelect)
