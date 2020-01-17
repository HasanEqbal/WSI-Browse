import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import AdminList from '../components/AdminList/AdminListRenderer';

export default {
  component: AdminList,
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
