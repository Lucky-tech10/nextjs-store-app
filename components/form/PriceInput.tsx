import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  const name = "price";

  return (
    <div>
      <Label htmlFor="price" className="capitalize">
        Price($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
