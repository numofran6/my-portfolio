import { motion } from 'framer-motion';
import Link from 'next/link';
import { GrMail } from '@react-icons/all-files/gr/GrMail';
import { BsPhone } from '@react-icons/all-files/bs/BsPhone';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactMe() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_7ma24x2',
				'template_5glf02f',
				form.current,
				'9NMHxMfAJvMfaMzeL'
			)
			.then(
				(result) => {
					toast.success('Submitted Successfully');
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
					toast.success('Submission Failed');
				}
			);
	};

	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				className="pagelayout"
			>
				<ToastContainer
					position="bottom-left"
					limit={3}
					autoClose={3000}
					pauseOnFocusLoss={false}
				/>
				<motion.h3
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="head tracking-widest top-24"
				>
					Contact Me
				</motion.h3>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
					className="flex flex-col space-y-8 sm:space-y-10 absolute top-36"
				>
					<h4 className="text-center font-semibold text-3xl sm:text-5xl md:text-6xl my-3 text-[#ce8e04]">
						Hire Me. Lets Collaborate
					</h4>

					<div className="space-y-3">
						<div className="flex space-x-3 items-center">
							<BsPhone className="w-7 h-7 animate-bounce text-[#ce8e04]" />
							<p>+233 50 238 5080</p>
						</div>

						<div className="flex space-x-3 items-center">
							<GrMail className="w-7 h-7 animate-bounce text-[#ce8e04]" />
							<p>numofran6@gmail.com</p>
						</div>
					</div>

					<form
						onSubmit={sendEmail}
						className="flex flex-col space-y-2 w-fit mx-auto"
						ref={form}
					>
						<div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
							<input
								name="user_name"
								type="text"
								placeholder="Name"
								className="contactInput"
								required
							/>

							<input
								name="user_email"
								type="email"
								placeholder="Email"
								className="contactInput"
								required
							/>
						</div>

						<select
							name="topic"
							required
							className="contactInput text-gray-500"
						>
							<option value="">Please choose to Hire / Collaborate</option>
							<option value="Hire">Hire</option>
							<option value="Collaborate">Collaborate</option>
						</select>

						<input
							name="message"
							type="text"
							placeholder="Message"
							className="contactInput"
							required
						/>

						<button
							type="submit"
							className="bg-[#ce8e04] hover:bg-[#ce8e04]/50 active:bg-[#ce8e04] p-2 rounded-md text-black font-bold text-lg uppercase"
						>
							SUBMIT
						</button>
					</form>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default ContactMe;
