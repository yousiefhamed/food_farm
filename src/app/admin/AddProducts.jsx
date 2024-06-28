"use client";
import { useState } from "react";
import { createDoc } from "./../api/appwrite/handleProducts";
import CtaBtn from "./../components/CtaBtn";
import HeadingText from "./../components/HeadingText";
import {
  Input,
  Textarea,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    image: "",
    from: "",
    nutrients: "",
    quantity: 1,
    price: 0,
    organic: false,
    description: "",
    descChar: 0,
  });
  const [errors, setErrors] = useState({});
  const { countries } = useCountries();
  const [formResponse, setFormResponse] = useState([]);

  const index = countries.indexOf(
    countries.find((country) => country.name === "Israel")
  );
  if (index > -1) countries.splice(index, 1);

  // Sort countries by name
  countries.sort((a, b) => a.name.localeCompare(b.name));

  const handleChange = (field, value, e) => {
    setFormData((prev) => {
      if (field === "description") {
        if (value.length <= 600) {
          return {
            ...prev,
            [field]: value,
            descChar: value.length,
          };
        } else {
          return { ...prev };
        }
      }

      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const checkField = (field, length, UIName) => {
    let error;
    switch (formData[field].length) {
      case 0:
        error = `${UIName} is required`;
        break;
      case 1:
      case 2:
        error = `${UIName} must be at least 3 characters`;
        break;
      default:
        if (formData[field].length > length) {
          error = `${UIName} is too Lengthy`;
        } else {
          return;
        }
    }
    return error;
  };

  const validateForm = (field, length, UIName) => {
    const newErrors = {};

    if (
      ["productName", "image"].find((x) => x === field) &&
      checkField(field, length, UIName)
    ) {
      newErrors[field] = checkField(field, length, UIName);
    } else if (field === "image") {
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(formData.image)) {
        newErrors.image = "Invalid URL format";
      }
    } else if (
      ["price", "quantity"].find((x) => x === field) &&
      formData[field] <= 0
    ) {
      newErrors[field] = `${UIName} must be greater than 0.`;
    }

    newErrors[field]
      ? setErrors((prev) => ({
          ...prev,
          [field]: newErrors[field],
        }))
      : setErrors(() => {
          const { ...rest } = errors;
          delete rest[field];
          return rest;
        });
    return newErrors;
  };

  const addProduct = () => {
    let newErrors = {
      ...validateForm("productName", 256, "Product Name"),
      ...validateForm("image", 256, "Image URL"),
      ...validateForm("quantity", 256, "Quantity"),
      ...validateForm("price", 256, "Price"),
    };
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const { descChar, ...rest } = formData;
      createDoc(rest)
        .then((response) => {
          if (response[0] === 200) {
            setFormResponse([
              200,
              `The "${response[1].productName}" has been added Successfully with ID = "${response[1].$id}"`,
            ]);
          } else {
            setFormResponse([400, `Error: ${response[1]}`]);
          }
        })
        .catch((err) => {
          setFormResponse(`Error: ${err.message}`);
        });
    }
  };

  return (
    <main className="px-5">
      <HeadingText
        subHeading="New Product"
        mainHeading="Add the Product Data"
        isCenter={true}
      />
      <section
        role="form"
        className="flex flex-col justify-center items-center mb-10"
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5 max-w-[500px] my-5">
          <Input
            color="teal"
            type="text"
            label="Title"
            onChange={(e) => handleChange("productName", e.target.value, e)}
            value={formData.productName}
            error={!!errors.productName}
            onBlur={() => validateForm("productName", 256, "Product Name")}
          />
          {errors.productName && (
            <Typography
              variant="small"
              color="red"
              className="w-full -mt-4 flex justify-start items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.productName}
            </Typography>
          )}
          <Input
            color="teal"
            type="text"
            label="Photo"
            onChange={(e) => handleChange("image", e.target.value, e)}
            value={formData.image}
            error={!!errors.image}
            onBlur={() => validateForm("image", 256, "Image URL")}
          />
          {errors.image && (
            <Typography
              variant="small"
              color="red"
              className="w-full -mt-4 flex justify-start items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.image}
            </Typography>
          )}
          <Select
            size="lg"
            label="Country"
            onChange={(e) => handleChange("from", e, e)}
            value={formData.from}
          >
            {countries.map(({ name, flags }) => (
              <Option
                key={name}
                value={name}
                className="flex items-center gap-2"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name}
              </Option>
            ))}
          </Select>

          <Input
            color="teal"
            type="text"
            label="Nutrients"
            onChange={(e) => handleChange("nutrients", e.target.value, e)}
            value={formData.nutrients}
          />
          <Input
            color="teal"
            type="number"
            label="Quantity"
            min={1}
            onChange={(e) =>
              handleChange("quantity", Number(e.target.value), e)
            }
            value={formData.quantity}
            error={!!errors.quantity}
            onBlur={() => validateForm("quantity", 0, "Quantity")}
          />
          {errors.quantity && (
            <Typography
              variant="small"
              color="red"
              className="w-full -mt-4 flex justify-start items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.quantity}
            </Typography>
          )}

          <Input
            color="teal"
            type="number"
            label="Price"
            min={0}
            onChange={(e) => handleChange("price", Number(e.target.value), e)}
            value={formData.price}
            error={!!errors.price}
            onBlur={() => validateForm("price", 0, "Price")}
          />
          {errors.price && (
            <Typography
              variant="small"
              color="red"
              className="w-full -mt-4 flex justify-start items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.price}
            </Typography>
          )}

          <Select
            color="teal"
            label="Is It Organic"
            onChange={(e) => handleChange("organic", e, e)}
            value={formData.organic}
          >
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
          <Textarea
            color="green"
            label="Description"
            onChange={(e) => handleChange("description", e.target.value, e)}
            value={formData.description}
          />
          <Typography
            variant="small"
            color="gray"
            className="w-full -mt-6 flex justify-end items-center gap-1 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            {`${formData.descChar} of 600`}
          </Typography>
        </div>
        <button onClick={addProduct} className="rounded-full">
          <CtaBtn link="#" txt="Save" />
        </button>
        {formResponse.length > 0 && (
          <Typography
            variant="small"
            color={formResponse[0] === 200 ? "green" : "red"}
            className="w-full flex justify-center items-center gap-1 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            {`${formResponse[1]}`}
          </Typography>
        )}
      </section>
    </main>
  );
}
