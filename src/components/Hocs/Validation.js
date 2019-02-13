import React from "react"

const withValdations = (WrappedComponent, validate) => {
  return class Validation extends React.PureComponent {
    state = {
      fields: {}
    };

    onChange = fieldName => event => {
      const fields = {
        ...this.state.fields,
        ...{ [fieldName]: { value: event.target.value } }
      }
      this.setState({ fields: fields })
    };

    onChangeArray = (key, fieldName) => event => {
      const index = parseInt(event.target.getAttribute("index"))
      const fieldIndex = parseInt(event.target.getAttribute("fieldIndex"))
      const newArray = this.state.fields[key].map((fields, i) => {
        if (i !== index) {
          return fields
        }
        const newFields = fields.map((field, j) => {
          if (j !== fieldIndex) {
            return field
          }
          return {
            ...field,
            value: event.target.value
          }
        })
        return newFields
      })
      this.setState({
        ...this.state,
        fields: {
          ...this.state.fields,
          [key]: newArray
        }
      })
    };

    addFieldToKey(key, field) {
      //const index = this.state.fields[key] ? this.state.fields[key].length : 0
      const newFields = Object.keys(field).map((k, i) => {
        return {
          name: k,
          value: "",
          onChange: this.onChangeArray(key, k)
        }
      })
      this.setState({
        ...this.state,
        fields: {
          ...this.state.fields,
          [key]: this.state.fields[key]
            ? [...this.state.fields[key], newFields]
            : [newFields]
        }
      })
    }

    removeFieldFromKey(key, index) {
      console.log("INDEX: ", index)
      const newArray = this.state.fields[key].filter((f, i) => i !== index)
      console.log("NEW: ", newArray)
      this.state.fields &&
        this.setState({
          ...this.state,
          fields: {
            [key]: newArray
          }
        })
    }

    getFieldsFrom(key) {
      return this.state.fields[key] && this.state.fields[key]
    }

    getFieldFor(fieldName) {
      return {
        name: fieldName,
        onChange: this.onChange(fieldName)
      }
    }

    extractedData() {
      return Object.keys(this.state.fields).reduce((acc, curr) => {
        const field = this.state.fields[curr]
        if (Array.isArray(field)) {
          acc[curr] = field.reduce((acc, curr) => {
            const data = curr.reduce((result, f) => {
              result[f.name] = f.value
              return result
            }, {})
            return [...acc, data]
          }, [])
        } else {
          acc[curr] = this.state.fields[curr].value
        }
        return acc
      }, {})
    }

    render() {
      const props = {
        ...this.props,
        ...{
          fieldFor: this.getFieldFor.bind(this),
          fieldsFrom: this.getFieldsFrom.bind(this),
          addFieldToKey: this.addFieldToKey.bind(this),
          removeFieldFromKey: this.removeFieldFromKey.bind(this),
          validationErrors: validate(this.extractedData()),
          data: this.extractedData()
        }
      }
      return <WrappedComponent {...props} />
    }
  }
}

export default withValdations
