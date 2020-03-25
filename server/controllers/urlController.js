import validUrl from "valid-url";
import shortid from "shortid";

import Url from "../models/Url";

import config from "../config";

const BASE_URI = config.BASE_URI;

export const getAddShortUrl = (req, res, next) => {
  let longUrl = req.query;

  Url.findOne({ longUrl: longUrl.longurl }, (err, result) => {
    if (!err) {
      console.log(result);

      if (!result) {
        if (!validUrl.isUri(BASE_URI)) {
          return res.status(401).json({
            msg: "Invalid Base Url"
          });
        }

        if (!validUrl.isUri(longUrl.longurl)) {
          return res.status(401).json({
            msg: "Invalid Long Url"
          });
        }

        let code = longUrl.code ? longUrl.code : shortid.generate();

        let url = new Url({
          urlCode: code,
          shortUrl: BASE_URI + "/" + code,
          longUrl: longUrl.longurl
        });

        url
          .save()
          .then(result => {
            res.json({
              msg: "Short Url successfully generated",
              result
            });
          })
          .catch(err => {
            res.json({
              msg: "Aapse naa hone vala",
              err
            });
          });
      } else {
        return res.json({
          msg: "Short url already exists!!",
          shortUrl: result.shortUrl
        });
      }
    } else {
      return res.status(404).json({
        msg: "Something went wrong!!",
        err
      });
    }
  });
};

export const getAllUrls = (req, res, next) => {
  Url.find({}, (err, result) => {
    if (!err) {
      return res.json({
        result
      });
    } else {
      return res.status(404).json({
        msg: "Something went wrong!! Error in return all Urls",
        err
      });
    }
  });
};

export const getEditUrl = (req, res, next) => {
  let newUrl = req.query;

  Url.findById(newUrl.id, (err, result) => {
    if (!err) {
      if (result) {
        result.urlCode = newUrl.code;
        result.longUrl = newUrl.longurl;
        result.shortUrl = BASE_URI + "/" + newUrl.code;

        result.save().then(edit => {
          return res.json({
            msg: "URL Successfully edited",
            edit
          });
        });
      } else {
        return res.status(401).json({
          msg: "This is a mistake, or maybe you are... URL doesn't exist"
        });
      }
    } else {
      return res.status(404).json({
        msg: "Something went wrong!! Error in changing Editing",
        err
      });
    }
  });
};

export const getDeleteUrl = (req, res, next) => {
  let id = req.query.id;

  Url.findOneAndDelete({ _id: id }, (err, result) => {
    if (!err) {
      res.json({
        msg: "Successfully, Deleted"
      });
    } else {
      res.status(401).json({
        msg: "Something went wrong!! Error in deleting url",
        err
      });
    }
  });
};
