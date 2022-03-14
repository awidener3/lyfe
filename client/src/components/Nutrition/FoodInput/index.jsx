import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MEAL } from '../../../utils/mutations';
import './foodinput.scss';

const FoodInput = () => {
	// declare state of formData
	const [formData, setFormData] = useState({
		calories: '',
		protein: '',
		carbohydrates: '',
		fat: '',
	});

	// bring in addMeal mutation
	const [addMeal, { error }] = useMutation(ADD_MEAL);

	// handle submitting the form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await addMeal({
				variables: {
					calories: parseInt(formData.calories),
					protein: parseInt(formData.protein),
					carbohydrates: parseInt(formData.carbohydrates),
					fat: parseInt(formData.fat),
				},
			});
		} catch (err) {
			console.error(err);
		}

		// reset form data
		setFormData({
			calories: '',
			protein: '',
			carbohydrates: '',
			fat: '',
		});

		// reset form values
		document.getElementById('submit-meal-form').reset();
	};

	// handle changes in the form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<section className="nutrition-input-container">
			<div className="rows">
				<h2>Meal Log</h2>
				<p>Log your meals and snacks!</p>
			</div>
			<div className="second-row">
				<form id="submit-meal-form" onSubmit={handleFormSubmit}>
					<div className="time">
						<h3>Calories</h3>
						<input
							type="number"
							name="calories"
							id="calories-input"
							// TODO: Update class time-counter to be descriptive of this form as well
							className="time-counter"
							placeholder={formData.calories}
							onChange={handleInputChange}
						/>
					</div>
					<div className="macros-title">
						<h3>Macros</h3>
					</div>
					<div className="macros">
						<h3>Carbs</h3>
						<input
							type="number"
							name="carbohydrates"
							id="carbohydrates-input"
							placeholder={formData.carbohydrates}
							onChange={handleInputChange}
						/>
					</div>
					<div className="macros">
						<h3>Protein</h3>
						<input
							type="number"
							name="protein"
							id="protein-input"
							placeholder={formData.protein}
							onChange={handleInputChange}
						/>
					</div>
					<div className="macros">
						<h3>Fats</h3>
						<input
							type="number"
							name="fat"
							id="fat-input"
							placeholder={formData.fat}
							onChange={handleInputChange}
						/>
					</div>
					<div className="servings">
						<div className="servings-div">
							<h3>Servings</h3>
							{/* // TODO: Add pointer to mouse */}
							<button className="left"> - </button>
							{/* // ? Might not need to be an input since there are increment and decrement buttons */}
							{/* // TODO: Update name, className and placeholder -> Add ID */}
							<input
								type="number"
								name="metRating"
								className="met-rating"
								placeholder={formData.metRating}
								onChange={handleInputChange}
							/>
							<button className="right"> + </button>
						</div>
					</div>
					<div className="notes">
						<h3>Notes</h3>
						<textarea
							type="text"
							name="notes"
							className="notes-input"
							placeholder={formData.notes}
							onChange={handleInputChange}
						/>
					</div>
					<div className="add-button">
						<button type="submit">Add Info</button>
					</div>
					{error ? (
						<div>
							<p className="error-text">
								The provided credentials are incorrect
							</p>
						</div>
					) : null}
				</form>
			</div>
		</section>
	);
};

export default FoodInput;
