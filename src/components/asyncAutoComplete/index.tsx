import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Paper } from "@mui/material";

interface Film {
  title: string;
  year: number;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

 const AsyncAutoComplete = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <React.Fragment>
       <Paper component="form"  variant="outlined">
      {/* <Autocomplete
        // id="asynchronous-demo"
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Asynchronous"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      /> */}
       <Autocomplete
        // multiple={props.isMultiple}
        id={ `AsyncAutoComplete`}
        style={{ width: 300 }}
        freeSolo
        // value={isClearAsyncValue && value}
        // className={cls.autoComplete}
        // {...(disableOpenProp ? {} : { open: open })} 
        // openOnFocus={openOnFocus}
        onClose={() => setOpen(false)}
        // ref={AsyncRef}
        // getOptionLabel={(option: any) => {
          // if (option?.[selector] && option?.[selector] === ADVANCED_SEARCH)
          //   return "";
          // if (option?.inputValue && isAddOption) {
          //   return option.newValue
          // }
          // return typeof option === "string" ? option

          //   : option && option[selector];
        // }}
        onInputChange={(event: any) => {        
          // if (!event) return;           
          // if(!props.isMultiple){ 
          //   setValue(event.target.value)
          //   setUpdateValue(event.target.value);
          // }
          // getDrugName && getDrugName(event.target.value);
        }}
        onChange={(event: any, iValue: any) => {
            // let tempValue = iValue;
            // if (iValue && iValue?.inputValue && isAddOption) {
            //   if (typeof options[0] === 'object') {
            //     const newOption: Record<string, any> = {};
            //     for (let key in options[0]) {
            //       newOption[key] = null;
            //       if (key === selector) {
            //         newOption[selector] = iValue.inputValue;
            //       }
            //     }
            //     tempValue = newOption;
            //   } else {
            //     tempValue = iValue.inputValue
            //   }
            //   setOptions([...options, tempValue]);
            // }
          //   tempValue && callBackFunction && callBackFunction(tempValue, false);
          //   if(tempValue==null && event.currentTarget.getAttribute("aria-label")==='Clear'){
          //     onClearAsyncAutoComplete && onClearAsyncAutoComplete();            
          // }
        }}
        options={options}
        loading={loading}
        // renderOption={(option: any) => (
          // props.renderInput ? props.renderInput(option) :
          //   <div
          //     className={
          //       option[selector] === ADVANCED_SEARCH ? cls.advanceSearch : ""
          //     }
          //   >
          //     <label>
          //       {typeof option === "string" ? option : option && option[selector]}
          //     </label>
          //     {/* <ZoomIn /> */}
          //   </div>
        // )}
        // filterOptions={(options: any, params: any) => {
          // const filtered = filter(options, params);

          // if (params.inputValue?.length > 2 && !filtered.length && isAddOption) {
          //   filtered.push({
          //     inputValue: params.inputValue,
          //     [selector]: `ADD ${params.inputValue}`,
          //   });
          // }
          // appending Advanced Search
          // if (
          //   params.inputValue?.length > 2 &&
          //   ((options.length === 0 && isAdvanced) ||
          //     (params.inputValue !== "" && isAdvanced))
          // ) {
          //   filtered.push({
          //     inputValue: params.inputValue,
          //     [selector]: `Advanced Search`,
          //   });
          // }

          // return filtered;
        // }}
        renderInput={(params) => (
          <TextField
            {...params}
            // placeholder={label}
            size="small"
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>)=>{
              if(event.keyCode===13){
                event.preventDefault();
              }
            }}            
            // InputProps={getInputProps(params)}
            
          />
        )}
      />
      </Paper>
    </React.Fragment>
  );
};
export default AsyncAutoComplete