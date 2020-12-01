import express from 'express';

export default function auth( req, res, next ){
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw 'Token is missing';
  }

  if (authHeader !== 'admin'){
    throw 'Token incorrect';
  }

  try {
    return next();
  } catch {
    throw ('User not admin');
  }
}
