--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

-- Started on 2024-12-17 18:20:22

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 24632)
-- Name: blog_post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blog_post (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    author_id integer NOT NULL,
    date_posted date DEFAULT CURRENT_DATE
);


ALTER TABLE public.blog_post OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24631)
-- Name: blog_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blog_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blog_post_id_seq OWNER TO postgres;

--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 219
-- Name: blog_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blog_post_id_seq OWNED BY public.blog_post.id;


--
-- TOC entry 221 (class 1259 OID 32813)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess jsonb NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 24623)
-- Name: user_account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_account (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.user_account OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24622)
-- Name: user_account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_account_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_account_id_seq OWNER TO postgres;

--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_account_id_seq OWNED BY public.user_account.id;


--
-- TOC entry 4705 (class 2604 OID 24635)
-- Name: blog_post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post ALTER COLUMN id SET DEFAULT nextval('public.blog_post_id_seq'::regclass);


--
-- TOC entry 4704 (class 2604 OID 24626)
-- Name: user_account id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_account ALTER COLUMN id SET DEFAULT nextval('public.user_account_id_seq'::regclass);


--
-- TOC entry 4862 (class 0 OID 24632)
-- Dependencies: 220
-- Data for Name: blog_post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blog_post (id, title, content, author_id, date_posted) FROM stdin;
3	Still Big Man Sampson	Don't fuck with me!	6	2024-12-14
8	Something Something	yfuvkuyhj	5	2024-12-14
9	AV JUST ENTERED	Waguaaaaan bretherens\nAyo boy	7	2024-12-14
12	Intro	I had to come this far	10	2024-12-15
\.


--
-- TOC entry 4863 (class 0 OID 32813)
-- Dependencies: 221
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (sid, sess, expire) FROM stdin;
Xp-Q2ItvxS0a51xX1gjKd8lH1N6H3jWV	{"cookie": {"path": "/", "httpOnly": true}, "passport": {"user": 5}}	2024-12-17 22:51:47
ds-zwbsK46vFCC2nvW_A3Ts0nNWXMAU-	{"cookie": {"path": "/", "httpOnly": true}, "passport": {"user": 5}}	2024-12-18 17:39:33
\.


--
-- TOC entry 4860 (class 0 OID 24623)
-- Dependencies: 218
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_account (id, username, password) FROM stdin;
4	1@3	$2b$10$hNW.kjomYyque7aJ3xvoEOUvXm6roM/0/qOjoW41A6YmIkibBb8iC
5	1@2.com	$2b$10$IoCBZWhJtwoBNW8tVcgM9.GHcxS.OeA7Y506jJyzM7I3bfQFyIQcW
6	sampson@gmail.com	$2b$10$S2CWlAeVbHGJSKsdo23UxOr/i/ajOTAW7BU7K5BGASj0sLpKikW2e
7	a@v.com	$2b$10$7OKuuMU/Rjw/J48v3Y9s.OyLkucKL16l6czrA9HcZM7PxIF2XPnoW
9	Tibardoe Benjamin	111056361084347119283
10	Benjamin Tibardoe	101719350518644766656
11	1@2.com	$2b$10$duApQN74L5qNq4GVnBGE..oP9RuNdGfuKdsvQKBBe0TW8yrezfKRe
12	1@2.com	$2b$10$hp51sEyIt8Jgksfjes/SDOpjeDLb9LJ5754PYhjqKRguFTyORc5.C
13	1@2.com	$2b$10$GQh8hRCIY0M5y/tiNm05/u4ai2nr53.quMX.hN6xyeq2aO..whXKu
14	1@2.com	$2b$10$HXSFj.E0MFvHiL4iEGb4uO9No2LFwWISxpCDyb4VysCHB6o3GK86y
\.


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 219
-- Name: blog_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blog_post_id_seq', 13, true);


--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_account_id_seq', 14, true);


--
-- TOC entry 4710 (class 2606 OID 24639)
-- Name: blog_post blog_post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post
    ADD CONSTRAINT blog_post_pkey PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 32819)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- TOC entry 4708 (class 2606 OID 24630)
-- Name: user_account user_account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT user_account_pkey PRIMARY KEY (id);


--
-- TOC entry 4713 (class 2606 OID 24640)
-- Name: blog_post blog_post_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post
    ADD CONSTRAINT blog_post_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.user_account(id) ON DELETE CASCADE;


-- Completed on 2024-12-17 18:20:30

--
-- PostgreSQL database dump complete
--

