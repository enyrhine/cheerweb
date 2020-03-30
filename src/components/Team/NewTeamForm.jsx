import React from 'react'
import { Formik, Field } from "formik"
import * as Yup from "yup"
import firebase from 'firebase/app'

const NewTeamForm = props => {
    var db = firebase.firestore()
    
    const renderLevels = () => {
        const levels = [1, 2, 3, 4, 5, 6]
        return levels.map(level => {
            return (<option key={level} value={level}>{level}</option>)
        })
    }

    const add = values => {
        db.collection("teams").add({
            name: values.name,
            level: values.level
        })
        .then(function(docRef) {
            console.log("Add notification here ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <div className="team-form-container">
            <Formik
                initialValues={{ name: "" }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500))
                    add(values)
                    // alert(JSON.stringify(values, null, 2))
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(3, "Joukkueen nimi tulee olla vähintään 3 kirjainta.")
                        .required("Kenttä on pakollinen")
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" >
                                Joukkueen nimi
                                </label>
                            <input
                                id="name"
                                placeholder="Lisää joukkueen nimi"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.name && touched.name
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />
                            <label htmlFor="level" >
                                Joukkueen level
                                </label>
                            <Field name="level" as="select" className="my-select">
                                {renderLevels()}
                            </Field>
                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Tyhjennä
                            </button>
                            <button type="submit" disabled={isSubmitting}>
                                Tallenna
                             </button>

                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default (NewTeamForm)