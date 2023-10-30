import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  department: string;
  why: string;
  salary: string;
  introduction: string;
  dreams: string;
  email: string;
};

export default function Forms2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const [submittedData, setSubmittedData] = useState<FormData>();

  const onValid = (data: FormData) => {
    setSubmittedData(data);
  };

  return (
    <div className="h-screen w-full bg-[#EEFEF9] py-20 font-bold flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onValid)}
        className="w-[450px] rounded-2xl border-2 border-b-[6px] border-r-[6px] border-black bg-[#FFE5E6] p-8"
      >
        <div className="mb-6 text-center text-2xl">Job Application Form</div>
        <div>
          <div className="pb-2 text-sm">
            What department do you want to work for?
            {errors.department?.type === "required" ? (
              <span className="tracking-tight text-red-600 pl-1">
                *required
              </span>
            ) : null}
          </div>
          <div className="mb-1 flex items-center gap-2">
            <input
              {...register("department", { required: true })}
              type="radio"
              value="sales"
              id="department_answer1"
              className="accent-black"
            />
            <label htmlFor="department_answer1" className="text-xs">
              Sales
            </label>
          </div>
          <div className="mb-1 flex items-center gap-2">
            <input
              {...register("department", { required: true })}
              type="radio"
              value="marketing"
              id="department_answer2"
              className="accent-black"
            />
            <label htmlFor="department_answer2" className="text-xs">
              Marketing
            </label>
          </div>
          <div className="mb-1 flex items-center gap-2">
            <input
              {...register("department", { required: true })}
              type="radio"
              value="accounting"
              id="department_answer3"
              className="accent-black"
            />
            <label htmlFor="department_answer3" className="text-xs">
              Accounting
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              {...register("department", { required: true })}
              type="radio"
              value="customerService"
              id="department_answer4"
              className="accent-black"
            />
            <label htmlFor="department_answer4" className="text-xs">
              Customer Service
            </label>
          </div>
        </div>
        <div className="mt-5">
          <div className="pb-2 text-sm">
            Why do you want to join this company?
            {errors.why?.type === "required" ? (
              <span className="tracking-tight text-red-600 pl-1">
                *required
              </span>
            ) : null}
          </div>
          <div className="mb-1 flex items-center gap-2">
            <input
              {...register("why", { required: true })}
              type="radio"
              value="money"
              id="why_answer1"
              className="accent-black"
            />
            <label htmlFor="why_answer1" className="text-xs">
              I want money
            </label>
          </div>
          <div className="mb-1 flex items-center gap-2">
            <input
              {...register("why", { required: true })}
              type="radio"
              value="love"
              id="why_answer2"
              className="accent-black"
            />
            <label htmlFor="why_answer2" className="text-xs">
              I love this company
            </label>
          </div>
          <div className="mb-1 flex items-center gap-2">
            <input
              {...register("why", { required: true })}
              type="radio"
              value="learn"
              id="why_answer3"
              className="accent-black"
            />
            <label htmlFor="why_answer3" className="text-xs">
              I want to learn
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              {...register("why", { required: true })}
              type="radio"
              value="customerService"
              id="why_answer4"
              className="accent-black"
            />
            <label htmlFor="why_answer4" className="text-xs">
              I don't know why
            </label>
          </div>
        </div>
        <div className="mt-5">
          <div className="pb-1 text-sm">Salary</div>
          <select
            {...register("salary")}
            className="w-full rounded-md border-2 border-black py-0.5 pl-2 text-xs focus:outline-blue-800"
          >
            <option value="$50K">$50K</option>
            <option value="$100K">$100K</option>
            <option value="$150K">$150K</option>
            <option value="$200K">$200K</option>
          </select>
        </div>
        <div className="mt-3">
          <div className="pb-1 text-sm">Introduce yourself</div>
          <input
            {...register("introduction", {
              required: "Please write down your introduction.",
            })}
            type="text"
            className={`w-full rounded-md border-2 border-black py-1 pl-2 text-xs ${
              errors.introduction
                ? "focus:outline-red-600"
                : "focus:outline-blue-800"
            }`}
          />
          {errors.introduction?.message ? (
            <div className="text-xs text-red-600">
              {errors.introduction.message}
            </div>
          ) : null}
        </div>
        <div className="mt-3">
          <div className="pb-1 text-sm">Tell us what your dreams are</div>
          <textarea
            {...register("dreams", {
              required: "Please tell us what your dreams are.",
              minLength: {
                value: 10,
                message: "Please write more than 10 characters.",
              },
            })}
            rows={4}
            className={`w-full resize-none rounded-md border-2 border-black p-2 text-xs ${
              errors.dreams ? "focus:outline-red-600" : "focus:outline-blue-800"
            }`}
          ></textarea>
          {errors.dreams?.message ? (
            <div className="-mt-1 text-xs text-red-600">
              {errors.dreams.message}
            </div>
          ) : null}
        </div>
        <div className="mt-2">
          <div className="pb-1 text-sm">Email</div>
          <input
            {...register("email", {
              required: "Please write down your email.",
              pattern: {
                value: /@naver.com$/i,
                message: "Only @naver is allowed.",
              },
            })}
            type="text"
            className={`w-full rounded-md border-2 border-black py-1 pl-2 text-xs ${
              errors.email ? "focus:outline-red-600" : "focus:outline-blue-800"
            }`}
          />
          {errors.email?.message ? (
            <div className="text-xs text-red-600">{errors.email.message}</div>
          ) : null}
        </div>
        <button className="mt-7 w-full rounded-md border-2 border-b-[3px] border-r-[3px] border-black bg-[#FBD44C] p-2 text-sm font-extrabold hover:bg-yellow-200 active:border-b-2 active:border-r-2">
          Give me this job
        </button>
        {isSubmitSuccessful ? (
          <div className="break-words text-xs pt-3">
            {JSON.stringify(submittedData)}
          </div>
        ) : null}
      </form>
    </div>
  );
}
